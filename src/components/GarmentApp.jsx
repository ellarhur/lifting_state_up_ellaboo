import { Garment } from '../models/Garment';
import { ShowGarment } from './ShowGarments';
import { AddGarment } from './AddGarment';
import { useState } from "react";


export const GarmentApp = () => {
    const [garments, setGarments] = useState([]);
    const addGarment = () => { 
    setGarments([...garments, new Garment("Cowboysskjorta")]); 
  };

  return (
        <>
          <AddGarment createGarment={addGarment}/>
          <ShowGarment garments={garments} />
        </>
      );
};
