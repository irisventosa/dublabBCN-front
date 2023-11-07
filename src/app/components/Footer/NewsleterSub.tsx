const Newsletter = () => {
  return (
    <div className="flex flex-col ">
      <span>Newsletter</span>
      <br />
      <span className="h-8">
        forma part d'una comunitat culturalment activa i inquieta.
      </span>
      <label htmlFor="email">
        <input
          className="w-[537px] h-[42px] rounded-md pl-4 mt-1 "
          placeholder="ENTER EMAIL"
          type="text"
          name="email"
          id="email"
        />
      </label>
    </div>
  );
};

export default Newsletter;
