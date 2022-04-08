export type repository = {
  full_name: string;
  description: string;
  html_url: string;
};

type RepositoryItemProps = {
  repository: repository;
};

export function RepositoryItem({ repository }: RepositoryItemProps) {
  return (
    <li>
      <strong>{repository.full_name}</strong>
      <p>{repository.description}</p>
      <a href={repository.html_url} target="_blank">
        Acessa repo
      </a>
    </li>
  );
}
