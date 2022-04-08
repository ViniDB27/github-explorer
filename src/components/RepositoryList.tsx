import { useState, useEffect } from "react";
import { repository, RepositoryItem } from "./RepositoryItem";
import "../styles/repositorys.scss";

//https://api.github.com/orgs/rocketseat/repos

export function RepositoryList() {
  const [repositories, setRepositories] = useState<repository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then((response) => response.json())
      .then((data) => {
        setRepositories(data);
      });
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositorios</h1>

      <ul>
        {repositories.map((repository) => (
          <RepositoryItem key={repository.full_name} repository={repository} />
        ))}
      </ul>
    </section>
  );
}
