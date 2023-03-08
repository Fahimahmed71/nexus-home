import FeaturedProperties from "@/components/Home/FeaturedProperties/FeaturedProperties";
import Header from "@/components/Home/Header/Header";
import Places from "@/components/Home/Places/Places";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import TopAgents from "@/components/Home/TopAgents/TopAgents";
import ClientsTestimonials from "@/components/Home/ClientsTestimonials/ClientsTestimonials";

export default function Home({ testimonials, agents, places }) {
  useEffect(() => {
    setTimeout(() => {
      AOS.init();
    }, 0);
  }, []);

  return (
    <>
      <Head>
        <title>Nexus Home</title>
      </Head>
      <Header />
      <FeaturedProperties />
      <Places places={places} />
      <TopAgents agents={agents} />
      <ClientsTestimonials testimonials={testimonials} />
    </>
  );
}

// Testimonials
async function getTestimonials() {
  const res = await fetch("http://localhost:5000/testimonials");
  const json = await res.json();
  return json;
}

// agents
async function getAgents() {
  const res = await fetch("http://localhost:5000/agents");
  const json = await res.json();
  return json;
}

// places
async function getPlaces() {
  const res = await fetch("http://localhost:5000/places");
  const json = await res.json();
  return json;
}

// ssg
export async function getStaticProps() {
  const testimonials = await getTestimonials();
  const agents = await getAgents();
  const places = await getPlaces();

  return { props: { testimonials, agents, places } };
}
