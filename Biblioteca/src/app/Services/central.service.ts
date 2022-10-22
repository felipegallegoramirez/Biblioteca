import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc, updateDoc } from '@angular/fire/firestore';

import { Storage, ref, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage';
import { resolve } from 'dns';
import { response } from 'express';



import { Observable } from 'rxjs';
import plant from '../Interfaces/plant'
import ave from '../Interfaces/ave';
import insecto from '../Interfaces/insecto';
import inventario from '../Interfaces/inventario';


@Injectable({
  providedIn: 'root'
})
export class CentralService {

  constructor(private firestore: Firestore , private storage:Storage) { }

  //!Plantas

  addplant(plant: plant) {
    const plantRef = collection(this.firestore, 'plants');
    return addDoc(plantRef, plant);
  }

  getplants(): Observable<plant[]> {
    const plantRef = collection(this.firestore, 'plants');
    return collectionData(plantRef, { idField: 'id' }) as Observable<plant[]>;
  }

  deleteplant(plant: plant) {
    const plantDocRef = doc(this.firestore, `plants/${plant.id}`);
    return deleteDoc(plantDocRef);
  }

  //!Imagen

  async uploadimagen(file:File): Promise<string>{
    console.log(file)

    const imgRef = ref(this.storage, `images/${file.name}`);

    console.log(imgRef)

     let x = await uploadBytes(imgRef, file)
      .then(response => {
        console.log(response)
        return response
      })
      .catch(error => console.log(error));
      const url = await getDownloadURL(imgRef);
      console.log(url)
      return url
  }

  //!ave

  addave(ave: ave) {
    const aveRef = collection(this.firestore, 'aves');
    return addDoc(aveRef, ave);
  }

  getaves(): Observable<ave[]> {
    const aveRef = collection(this.firestore, 'aves');
    return collectionData(aveRef, { idField: 'id' }) as Observable<ave[]>;
  }

  deleteave(ave: ave) {
    const aveDocRef = doc(this.firestore, `aves/${ave.id}`);
    return deleteDoc(aveDocRef);
  }

  //!insecto

  addinsecto(insecto: insecto) {
    const insectoRef = collection(this.firestore, 'insectos');
    return addDoc(insectoRef, insecto);
  }

  getinsectos(): Observable<insecto[]> {
    const insectoRef = collection(this.firestore, 'insectos');
    return collectionData(insectoRef, { idField: 'id' }) as Observable<insecto[]>;
  }

  deleteinsecto(insecto: insecto) {
    const insectoDocRef = doc(this.firestore, `insectos/${insecto.id}`);
    return deleteDoc(insectoDocRef);
  }


    //!inventario

    addinventario(inventario: inventario) {
      const inventarioRef = collection(this.firestore, 'inventarios');
      return addDoc(inventarioRef, inventario);
    }
  
    getinventario(): Observable<inventario[]> {
      const inventarioRef = collection(this.firestore, 'inventarios');
      return collectionData(inventarioRef, { idField: 'id' }) as Observable<inventario[]>;
    }
  
    deleteinventario(inventario: inventario) {
      const inventarioDocRef = doc(this.firestore, `inventarios/${inventario.id}`);
      return deleteDoc(inventarioDocRef);
    }

  
  }



