import ThemeSwitcher from "@/components/providers/ThemeSwitcher";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <main className=''>
      <div className='hidden md:block fixed top-0 w-full shadow-md border-b'>
        <header className='flex container  items-center justify-between py-3 '>
          <h2 className=' text-2xl font-bold'>theDriver.</h2>

          <div className='flex items-center gap-x-3'>
            <Button size={"lg"} className='w-56'>
              Register
            </Button>
            <ThemeSwitcher />
          </div>
        </header>
      </div>

      <section className='h-screen p-5 flex flex-col items-center gap-5 justify-center'>
        <h2 className=' text-4xl font-bold text-primary'>theDriver.</h2>
        <h2 className='lg:w-3/5 text-center text-3xl lg:text-6xl font-bold capitalize'>
          Discover the most experienced drivers near you
        </h2>
        <p className='lg:w-3/5 mx-auto text-lg text-center text-accent-foreground'>
          Find your personal experienced and verified driver that knows the way
          around the city
        </p>
        <Button size={"lg"} className='w-56'>
          Register
        </Button>
      </section>
    </main>
  );
}
