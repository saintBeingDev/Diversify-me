import { Footer } from "flowbite-react";

const Foot = () => {
  return (
    <div className="mt-8">
      <Footer container={true}>
        <Footer.Copyright href="/" by="Diversify Me" year={new Date().getFullYear()} />
        <Footer.LinkGroup>
          <Footer.Link href="/" className="px-2">Home</Footer.Link>
          <Footer.Link href="/about" className="px-2">About</Footer.Link>
          <Footer.Link href="/contact">Contact</Footer.Link>
        </Footer.LinkGroup>
      </Footer>
    </div>
  );
};

export default Foot;
