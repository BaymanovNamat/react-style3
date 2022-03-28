import "./NavBar.css";


function NavBar(props) {

  const link = [
    { name: "Google", link: "https://google.com" },
    { name: "Bing", link: "https://bing.com" },
  ];

  const linkList = link.map((link) => (

    
      <li>
        <a href={link.link}>
          {link.name}
        </a>
      </li>

  ));

  return (
    <ul >
      {linkList}
    </ul>
  );
}


export default NavBar;