import Header, { Nav } from "./components/Header";
import Advertisements from "./components/Advertisements";

const App = () => {
  const headerText = "Marketplace UI!";
  const logo = "logo.jpg";
  const links = ["Login", "Sign Up", "About"];

  const advertisementsData = [
    {
      title: "Ad 1",
      description: "This is the first advertisement.",
      image: "https://via.placeholder.com/100",
      contact: "contact1@example.com",
    },
    {
      title: "Ad 2",
      description: "This is the second advertisement.",
      image: "https://via.placeholder.com/100",
      contact: "contact2@example.com",
    },
    {
      title: "Ad 3",
      description: "This is the third advertisement.",
      image: "https://via.placeholder.com/100",
      contact: "contact3@example.com",
    },
    {
      title: "Ad 4",
      description: "This is the fourth advertisement.",
      image: "https://via.placeholder.com/100",
      contact: "contact4@example.com",
    },
    {
      title: "Ad 5",
      description: "This is the fifth advertisement.",
      image: "https://via.placeholder.com/100",
      contact: "contact5@example.com",
    },
    {
      title: "Ad 6",
      description: "This is the sixth advertisement.",
      image: "https://via.placeholder.com/100",
      contact: "contact6@example.com",
    },
    // Add more advertisements as needed
  ];

  return (
    <div>
      <Nav logo={logo} links={links} />
      <Header text={headerText} bgColor="danger" />
      <div className="container">
        <h2 className="mt-4 mb-4">Advertisements</h2>
        <Advertisements list={advertisementsData} />
      </div>
      
      <Header />
    </div>
  );
};

export default App;
