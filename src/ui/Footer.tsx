function Footer() {
  return (
    <div className="mt-4 flex items-center justify-center rounded-xl bg-food-500 p-4 text-white">
      <p>
        Copyright &copy; {new Date().getFullYear()} ChoosyBites. All Rights
        Reserved.
      </p>
    </div>
  );
}

export default Footer;
