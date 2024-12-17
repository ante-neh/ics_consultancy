import Marquee from "react-fast-marquee"
import ItemCard from "../common/ItemCard"
import Container from "../common/Container"
import educationDestinations from "@/data/data"

const Destinations = () => {
  return (
    <div className="flex flex-col gap-12 mt-24 mb-12 items-center">
      <Container className="flex flex-col gap-12 py-4 items-center" >
        <h1 className="text-3xl font-bold font-euclid text-[#00EDCF]" id="destinations">Destinations</h1>
      </Container>
      <Marquee pauseOnHover className="flex gap-12">
      {educationDestinations.map((destination) => (
          <ItemCard
            key={destination.id}
            name={destination.name}
            description={destination.description}
            imageSrc={destination.imageSrc}
          />
        ))}        
      </Marquee>
    </div>
  )
}

export default Destinations