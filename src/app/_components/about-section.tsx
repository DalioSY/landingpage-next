import { GitHubIcon, InstagramIcon, LinkedInIcon, TwitterIcon, TwitterXIcon, YoutTubeIcon } from "@/components/social-icons";
import Image from "next/image";
import Link from "next/link";

function SocialLink({ icon: Icon, ...props }: any) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

export function AboutSection() {
  return (
    <section id="about" className="container flex flex-col md:max-w-[64rem] md:py-12 lg:py-24">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-y-12 lg:grid-row-[auto-1fr]">
        <div className="max-w-xs px2.5 lg:max-none">
          <Image src='/avatar.png' alt="Yumi" width={800} height={800} quality='95' priority={true}
            className="aspect-square rotate-3 rounded-lg bg-zinc-100 dark:bg-zinc-800 object-cover" />
        </div>
        <div className="lg:order-first lg:row-span-2 text-center md:text-start">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl">
            @yumiyamada
          </h1>
          <p className="mt-5 text-base text-muted-foreground">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia molestiae exercitationem impedit, expedita debitis velit. Est voluptatibus maiores veritatis mollitia adipisci ratione commodi animi harum magnam porro, quas deserunt delectus!
          </p>
          <div className="mt-6 flex justify-center md:justify-start gap-6">
            <SocialLink href='' icon={InstagramIcon} />
            <SocialLink href='' icon={GitHubIcon} />
            <SocialLink href='' icon={LinkedInIcon} />
            <SocialLink href='' icon={YoutTubeIcon} />
            <SocialLink href='' icon={TwitterXIcon} />
          </div>
        </div>
      </div>
    </section>
  )
}