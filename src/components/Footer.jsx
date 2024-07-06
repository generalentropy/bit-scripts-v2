function Footer() {
  return (
    <div className="mt-16 flex min-h-[100px] items-center justify-center bg-neutral-900 text-neutral-300">
      <span className="font-bold">
        {new Date().getFullYear()} - Bit-Scripts
      </span>
    </div>
  );
}

export default Footer;
