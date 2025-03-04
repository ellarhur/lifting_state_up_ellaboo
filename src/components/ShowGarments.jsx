export const ShowGarment = ({garments}) => {
  return <ul>
    {garments.map((g, i) => {
        return <li key={i}>{p.name}</li>
    })}
  </ul>;
};
