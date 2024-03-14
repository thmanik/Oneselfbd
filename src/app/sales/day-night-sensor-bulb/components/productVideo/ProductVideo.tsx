const ProductVideo = () => {
  return (
    <section>
      <div className="w-full mx-auto p-3 border-2 border-primary md:my-6 max-w-screen-lg rounded-xl">
        <iframe
          className="mx-auto w-[98%] aspect-video rounded-xl"
          src="https://www.youtube.com/embed/JSqayLfprRA?si=FkEvTgn4OuoQrAS6"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default ProductVideo;
