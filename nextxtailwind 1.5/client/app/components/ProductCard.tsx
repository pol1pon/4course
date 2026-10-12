import Image from "next/image"



interface CardProps {
    id: number
    image: string
    title: string
    description: string
    price: number
}

export default function ProductCard({id, image, title, description, price}: CardProps)
{
return (
    <>
    <div className="flex flex-col rounded-md bg-gray-100">
        <Image
        src={image}
        width={400}
        height={400}
        alt=""
        />
        <span className="text-lg font-bold text-black">{title}</span>
        <p className="text-gray-400 text-sm">{description}</p>
        <p className="text-gray-400 text-base">{`${price}₽`}</p>
    </div>
    </>
)
}