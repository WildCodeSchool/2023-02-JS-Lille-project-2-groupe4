import axios from "axios";
import { useEffect, useState } from "react";
import AstronautsCard from "./AstronautsCard";
import styles from "./AstronautsPage.module.css";

function HallFame() {
  // get api
  const [newAstronauts, setNewAstronauts] = useState({});
  const url = `https://ll.thespacedevs.com/2.2.0/astronaut/?limit=200`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: "Token 87af67c54abc7fe84a7e97b181686474262f3da5",
          },
        });
        setNewAstronauts(response.data);
      } catch (error) {
        console.error();
      }
    };

    fetchData();
  }, []);
  // filter astronaute
  const [search, setSearch] = useState("");
  const filteredAstronauts = newAstronauts.results
    ? newAstronauts.results.filter(
        (element) =>
          element.nationality.toLowerCase().includes(search.toLowerCase()) ||
          element.name.toLowerCase().includes(search.toLowerCase()) ||
          element.nationality.toLowerCase().includes(search.toLowerCase()) ||
          element.bio.toLowerCase().includes(search.toLowerCase())
      )
    : [];
  // searchbar value onChange
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className={styles.astronautsAndSearchContainer}>
      <div className={styles.searchContainer}>
        <input
          className={styles.searchBar}
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleChange}
        />
      </div>

      <div className={styles.astronautsContainer}>
        {filteredAstronauts.map((element) => (
          <AstronautsCard data={element} key={element.id} />
        ))}
      </div>
      <div className={styles.seeMore}>Scroll down to see more &#8595;</div>
    </div>
  );
}

export default HallFame;
