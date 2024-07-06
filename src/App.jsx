// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { SiGithub, SiTiktok, SiTwitter, SiYoutube } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-black/35  px-4 py-12 text-zinc-50">

<Logo />

<motion.div

  initial="initial"

  animate="animate"

  transition={{

    staggerChildren: 0.05,

  }}

  className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"

>
  <HeaderBlock />
  <SocialsBlock />
  <AboutBlock />
  <LocationBlock />
  <EmailListBlock />
</motion.div>

<Footer />

</div>
    </>
  )
}

const Block = ({ className, ...rest }) => {

  return (

    <motion.div

      variants={{

        initial: {

          scale: 0.5,

          y: 50,

          opacity: 0,

        },

        animate: {

          scale: 1,

          y: 0,

          opacity: 1,

        },

      }}

      transition={{

        type: "spring",

        mass: 3,

        stiffness: 400,

        damping: 50,

      }}

      className={twMerge(

        "col-span-4 rounded-lg border border-gray-700 bg-zinc-800 p-6",

        className

      )}

      {...rest}

    />

  );

};


const HeaderBlock = () => (

  <Block className="col-span-12 row-span-2 md:col-span-6">

    <img

      src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John"

      alt="avatar"

      className="mb-4 size-14 rounded-full"

    />

    <h1 className="mb-12 text-4xl font-medium leading-tight">

      Salut, je suis AGBO Roseline Judith.{" "}

      <span className="text-zinc-400">

      Je suis développeuse front-end et je crée des sites web sympas comme celui-ci.

      </span>

    </h1>

    <a

      href="#"

      className="flex items-center gap-1 text-red-300 hover:underline"

    >

      Contact me <FiArrowRight />

    </a>

  </Block>

);


const SocialsBlock = () => (

  <>

    <Block

      whileHover={{

        rotate: "2.5deg",

        scale: 1.1,

      }}

      className="col-span-6 bg-red-500 md:col-span-3"

    >

      <a

        href="https://www.facebook.com/profile.php?id=100081660888697"

        className="grid h-full place-content-center text-3xl text-white"

      >

        <FaFacebookSquare />

      </a>

    </Block>

    <Block

      whileHover={{

        rotate: "-2.5deg",

        scale: 1.1,

      }}

      className="col-span-6 bg-green-600 md:col-span-3"

    >

      <a

        href="https://github.com/agborose91"

        className="grid h-full place-content-center text-3xl text-white"

      >

        <SiGithub />

      </a>

    </Block>

    <Block

      whileHover={{

        rotate: "-2.5deg",

        scale: 1.1,

      }}

      className="col-span-6 bg-zinc-50 md:col-span-3"

    >

      <a

        href="https://www.linkedin.com/in/agbo-roseline-judith-081731292/"

        className="grid h-full place-content-center text-3xl text-black"

      >

            <FaLinkedin />

      </a>

    </Block>

    <Block

      whileHover={{

        rotate: "2.5deg",

        scale: 1.1,

      }}

      className="col-span-6 bg-blue-500 md:col-span-3"

    >

      <a

        href="#"

        className="grid h-full place-content-center text-3xl text-white"

      >

        <SiTwitter />

      </a>

    </Block>

  </>

);


const AboutBlock = () => (

  <Block className="col-span-12 text-3xl leading-snug">

    <p>

    🎨✨ Salut les amis ! Je suis Judith Roseline AGBO,{" "}

      <span className="text-zinc-400">

       une étudiante à la FASEG passionnée par le monde du numérique, des arts, du dessin et de la coiffure. 💻🎨✂️ Je suis une véritable touche-à-tout, jonglant avec mes multiples compétences pour créer des œuvres uniques et inspirantes. Rejoignez-moi dans cette aventure artistique où je partage mes créations, mes astuces et mes découvertes.

      </span>

    </p>

  </Block>

);


const LocationBlock = () => (

  <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3">

    <FiMapPin className="text-3xl" />

    <p className="text-center text-lg text-zinc-400"></p>

  </Block>

);


const EmailListBlock = () => (

  <Block className="col-span-12 md:col-span-9">

    <p className="mb-3 text-lg">Rejoignez ma liste de diffusion</p>

    <form

      onSubmit={(e) => e.preventDefault()}

      className="flex items-center gap-2"

    >

      <input

        type="email"

        placeholder="Entrer votre Mail"

        className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors focus:border-red-300 focus:outline-0"

      />

      <button

        type="submit"

        className="flex items-center gap-2 whitespace-nowrap rounded bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-300"

      >

        <FiMail /> Rejoindre la liste

      </button>

    </form>

  </Block>

);


const Logo = () => {

  // Temp logo from https://logoipsum.com/

  return (

  <svg id="logo-73" width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M56.25 1.25C56.25 1.94036 56.8096 2.5 57.5 2.5H58.75C59.4404 2.5 60 1.94036 60 1.25C60 0.559648 59.4404 3.49691e-06 58.75 3.49691e-06H57.5C56.8096 3.49691e-06 56.25 0.559648 56.25 1.25Z" className="ccustom" fill="#212326"></path> <path d="M20 40H26.0723L24.3045 38.2322C23.8357 37.7634 23.1998 37.5 22.5368 37.5H20C10.335 37.5 2.5 29.665 2.5 20C2.5 10.335 10.335 2.50001 20 2.5L40 2.5C49.665 2.5 57.5 10.335 57.5 20C57.5 29.665 49.665 37.5 40 37.5H32.5184C31.5238 37.5 30.57 37.1049 29.8667 36.4017L27.7957 34.3306C26.6236 33.1585 25.0338 32.5 23.3762 32.5H20C13.0964 32.5 7.5 26.9036 7.5 20C7.5 13.0964 13.0964 7.5 20 7.5L40 7.5C46.9036 7.5 52.5 13.0964 52.5 20C52.5 26.9036 46.9036 32.5 40 32.5H35.1961C34.2015 32.5 33.2477 32.1049 32.5444 31.4017L30.4733 29.3306C29.3012 28.1585 27.7115 27.5 26.0539 27.5H20C15.8579 27.5 12.5 24.1421 12.5 20C12.5 15.8579 15.8579 12.5 20 12.5L40 12.5C44.1421 12.5 47.5 15.8579 47.5 20C47.5 24.0916 44.2235 27.418 40.1512 27.4985L40.1504 27.5H38.3211C37.3265 27.5 36.3727 27.1049 35.6694 26.4017L33.5983 24.3306C32.6366 23.3688 31.3937 22.7529 30.0628 22.5628L30 22.5L20 22.5C18.6193 22.5 17.5 21.3807 17.5 20C17.5 18.6193 18.6193 17.5 20 17.5L40 17.5C41.3807 17.5 42.5 18.6193 42.5 20C42.5 21.3807 41.3807 22.5 40 22.5H35L36.7678 24.2678C37.2366 24.7366 37.8725 25 38.5355 25H40C42.7614 25 45 22.7614 45 20C45 17.2386 42.7614 15 40 15L20 15C17.2386 15 15 17.2386 15 20C15 22.7614 17.2386 25 20 25L29.1789 25C30.1735 25 31.1273 25.3951 31.8306 26.0983L33.9017 28.1694C35.0738 29.3415 36.6635 30 38.3211 30H40.625V29.9808C45.8567 29.6582 50 25.3129 50 20C50 14.4772 45.5228 10 40 10L20 10C14.4772 10 10 14.4772 10 20C10 25.5229 14.4772 30 20 30H26.0539C27.0485 30 28.0023 30.3951 28.7056 31.0983L30.7767 33.1694C31.9488 34.3415 33.5385 35 35.1961 35H40C48.2843 35 55 28.2843 55 20C55 11.7157 48.2843 5 40 5L20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35H23.3762C24.3708 35 25.3246 35.3951 26.0279 36.0983L28.099 38.1694C29.2711 39.3415 30.8608 40 32.5184 40H40C51.0457 40 60 31.0457 60 20C60 8.9543 51.0457 -9.65645e-07 40 0L20 4.13264e-06C8.9543 5.09829e-06 -9.65645e-07 8.95431 0 20C9.65645e-07 31.0457 8.95431 40 20 40Z" className="ccustom" fill="#212326"></path> </svg>

  );

};


const Footer = () => {

  return (

    <footer className="mt-12">

      <p className="text-center text-black">

        Realiser par{" "}

        <a href="https://www.facebook.com/profile.php?id=100081660888697" className=" hover:underline">

          @AgboJudith

        </a>

      </p>

    </footer>

  );

};

export default App
