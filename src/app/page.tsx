import Hero from "@/components/Hero";
import Services, { type Service } from "@/components/Services";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import { createClient } from "@/utils/supabase/server";

const FALLBACK_HERO_IMAGE = "/images/Sallon1.png";
const FALLBACK_HERO_ALT = "Ο χώρος υποδοχής του Elysian Hair Studio";

type HeroImageRow = {
  image_url: string;
  alt_text: string | null;
};

async function getHeroImage(): Promise<{ imageUrl: string; imageAlt: string }> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("site_images")
    .select("image_url, alt_text")
    .ilike("section", "hero")
    .order("display_order", { ascending: true })
    .limit(1)
    .maybeSingle<HeroImageRow>();

  if (error || !data) {
    return { imageUrl: FALLBACK_HERO_IMAGE, imageAlt: FALLBACK_HERO_ALT };
  }

  return {
    imageUrl: data.image_url,
    imageAlt: data.alt_text ?? FALLBACK_HERO_ALT,
  };
}

async function getServices(): Promise<Service[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("services")
    .select("id, title, description, price, image_url, display_order")
    .order("display_order", { ascending: true })
    .overrideTypes<Service[], { merge: false }>();

  if (error || !data) {
    return [];
  }

  return data;
}

export default async function Home() {
  const [{ imageUrl, imageAlt }, services] = await Promise.all([
    getHeroImage(),
    getServices(),
  ]);

  return (
    <main className="overflow-x-hidden">
      <Hero imageUrl={imageUrl} imageAlt={imageAlt} />
      <Services services={services} />
      <Reviews />
      <Footer />
    </main>
  );
}
