const Newsletter = () => {
  return (
    <div className="flex flex-col ">
      <span>Newsletter</span>
      <br />
      <span className="h-8">
        forma part d&apos;una comunitat culturalment activa i inquieta.
      </span>
      <label className="text-transparent" htmlFor="email">
        email
      </label>
      <input
        className="w-[537px] h-[42px] rounded-md pl-4 mt-1 cursor-text text-black "
        placeholder="ENTER EMAIL"
        type="text"
        name="email"
        id="email"
      />
    </div>
  );
};

export default Newsletter;
