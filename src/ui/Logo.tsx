function Logo() {
  return (
    <div className="flex items-center space-x-2 text-2xl font-bold">
      <img
        src="/choosy-bites-dark.png"
        alt="Choosy Bites"
        className="h-14 w-14"
      />
      <p className="text-white">
        Choosy
        <br />
        Bites
      </p>
    </div>
  );
}

export default Logo;
