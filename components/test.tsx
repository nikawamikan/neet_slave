import Image from "next/image" // Import the Image component from next/image
function Test() {
    fetch("https://api.example.com")
    return (
        <div className="relative h-60 w-full">
            <div
                className="
                absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 transition-all
                "
            >
                <Image
                    className="h-60 w-60 animate-itemspin"
                    src="image.png"
                    width={200}
                    height={120}
                    alt="logo"
                />
            </div>
        </div>
    )
}

export default Test
