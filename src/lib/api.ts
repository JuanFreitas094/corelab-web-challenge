import { IVehicle } from "../types/Vehicle";

const API = "http://localhost:3333";

const endpoint = (path: string): string => API + path;

const get = async (path: string): Promise<any> => {
  return fetch(endpoint(path)).then((res) => res.json());
};

const post = async (path: string, vehicle: IVehicle): Promise<any> => {
  return fetch(endpoint(path), {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ vehicle })
  }).then((res) => res.json());
} 

const put = async (path: string, vehicle: IVehicle): Promise<any> => {
  let json = JSON.stringify({ vehicle });
  return fetch(endpoint(path), {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: json
  }).then((res) => console.log(res.json()));
}

const destroy = async (path: string): Promise<any> => {
  return fetch(endpoint(path), { method: 'DELETE' })
        .then((res) => res.json());
}

//API access
export const getVehicles = async () => {
  return get("/vehicles");
};

export const getVehicle = async (id: number) => {
  return get("/vehicles/" + id);
}

export const addVehicle = async (vehicle: IVehicle) => {
  return post("/vehicles", vehicle);
}

export const updateVehicle = async (vehicle: IVehicle) => {
  return put("/vehicles/" + vehicle.id, vehicle);
}

export const deleteVehicle = async (id?: number) => {
  return destroy("/vehicles/"+ id);
}
