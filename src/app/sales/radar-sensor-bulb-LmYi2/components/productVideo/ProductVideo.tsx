const ProductVideo = () => {
  return (
    <section>
      <div className="w-full mx-auto p-3 border md:my-6 max-w-screen-lg rounded-xl">
        <iframe
          className="mx-auto w-[98%] aspect-video rounded-xl"
          src="https://www.youtube.com/embed/AQIe4-hWNPw?si=8JSha6d46HPJB_8j"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default ProductVideo;
