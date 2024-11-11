const InstructionVideo = () => {
  return (
    <div className="my-4  mx-auto w-full md:max-w-[1025px]">
      <div>
        <p className="mx-2  text-xl md:mx-1 my-1">
          বুঝতে অসুবিধা হলে নিচের ভিডিও দেখুনঃ-
        </p>
      </div>
      <div className="w-full mx-auto p-2 border-2 border-primary  max-w-screen-lg rounded-xl">
        <iframe
          className="mx-auto w-[98%] aspect-video rounded-xl"
          src="https://www.youtube.com/embed/YjhiCrCmpwY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default InstructionVideo;
