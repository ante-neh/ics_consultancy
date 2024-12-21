import ItemCard from "../common/ItemCard"
import Container from "../common/Container"
import educationDestinations from "@/data/data"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Destinations = () => {
  return (
    <div className="flex flex-col gap-12 py-12 items-center scroll-mt-20 bg-[#00EDCF]">
      <Container className="flex flex-col gap-12 py-4 items-center">
        <h1 className="text-3xl font-bold font-euclid text-white" id="destinations">
          Destinations
        </h1>
      </Container>
      <Container className="max-w-[1300px] relative">
        <Carousel className="w-full">
          <CarouselContent className="rounded-md flex xl:gap-1 2xl:gap-1.5">
            {educationDestinations.map((destination) => (
              <CarouselItem
                key={destination.id}
                className="
                flex-shrink-0 
                  w-full 
                  sm:w-3/4 
                  md:w-1/2 
                  md:basis-1/2
                  lg:basis-1/3
                  xl:basis-1/3
                  2xl:basis-1/4
                  flex justify-center
                "
              >
                <ItemCard
                  name={destination.name}
                  description={destination.description}
                  imageSrc={destination.imageSrc}
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Updated Buttons */}
          <CarouselPrevious
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-800 text-white rounded-full opacity-75 hover:opacity-100 transition"
          />
          <CarouselNext
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-800 text-white rounded-full opacity-75 hover:opacity-100 transition"
          />
        </Carousel>
      </Container>
    </div>
  )
}

export default Destinations
