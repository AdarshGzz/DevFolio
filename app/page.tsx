import Head from 'next/head';
import Navbar from '../components/navbar';
import HomeSection from '@/components/HomeSection';
import Blob from '@/components/subcomponents/blob';
import Typewriter from '@/components/subcomponents/typewriterText';
import Heading from '@/components/subcomponents/sectionHeading';
import About from '@/components/AboutSection';
import Skills from '@/components/SkillsSection';
import Qualification from '@/components/QualificationSection';
export default function Home() {
  
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Abhishek Tyagi" />
        <meta property="og:url" content="https://github.com/abhishektyagi2912" />
        <meta property="og:description" content="Abhishek is currently a second year undergrad from India. He is enthusiastic about web development and Open-Source." />
        <meta property="og:image:secure_url" content="https://cdn.bio.link/uploads/profile_pictures/2021-09-01/tE8wirBYKrXgipi0HP0GK69YD9TzfsDY.png" />
        <meta property="og:image" content="https://cdn.bio.link/uploads/profile_pictures/2021-09-01/tE8wirBYKrXgipi0HP0GK69YD9TzfsDY.png" />
        <meta property="profile:username" content="thepranaygupta" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Abhishek Tyagi" />
        <meta name="twitter:image" content="https://cdn.bio.link/uploads/profile_pictures/2021-09-01/tE8wirBYKrXgipi0HP0GK69YD9TzfsDY.png" />
        <meta name="twitter:url" content="https://thepranaygupta.github.io/" />
      </Head>
      <main>
       <HomeSection/>
       <About/>
       <Skills/>
       <Qualification/>
       
      </main>
    </>
   
    
  )
}
