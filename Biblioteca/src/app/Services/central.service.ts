import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc, updateDoc, getDoc } from '@angular/fire/firestore';

import { Storage, ref, uploadBytes, listAll, getDownloadURL,deleteObject } from '@angular/fire/storage';
import { promises, resolve } from 'dns';
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


  async getplant(id:string): Promise<any> {
    const aveRef = doc(this.firestore, "plants", id)
    return  await getDoc(aveRef);
  }

  async putplant(id:string,ave:any): Promise<any> {
    const aveRef = doc(this.firestore, "plants", id)
    return  await updateDoc(aveRef,ave);
  }

  async deleteplant(id: string) {
    const aveRef=doc(this.firestore, "plants", id)
    return  await deleteDoc(aveRef);
  }


  //!Imagen

  async uploadimagen(file:File): Promise<Array<string>>{
    var a = Math.floor(Math.random() * 99999999999999999)
    const imgRef = ref(this.storage, `images/${a}`);


     let x = await uploadBytes(imgRef, file)
      .then(response => {
        console.log(response)
        return response
      })
      .catch(error => console.log(error));
      const url = await getDownloadURL(imgRef);
      console.log(url)
      return [url,""+a]
  }
  async deleteimagen(id:string){
    const imgRef = ref(this.storage, `images/${id}`);
    await deleteObject(imgRef)
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

  async getave(id:string): Promise<any> {
    const aveRef = doc(this.firestore, "aves", id)
    return  await getDoc(aveRef);
  }

  async putave(id:string,ave:any): Promise<any> {
    const aveRef = doc(this.firestore, "aves", id)
    return  await updateDoc(aveRef,ave);
  }

  async deleteave(id: string) {
    const aveRef=doc(this.firestore, "aves", id)
    return  await deleteDoc(aveRef);
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


  async getinsecto(id:string): Promise<any> {
    const aveRef = doc(this.firestore, "insectos", id)
    return  await getDoc(aveRef);
  }

  async putinsecto(id:string,ave:any): Promise<any> {
    const aveRef = doc(this.firestore, "insectos", id)
    return  await updateDoc(aveRef,ave);
  }

  async deleteinsecto(id: string) {
    const aveRef=doc(this.firestore, "insectos", id)
    return  await deleteDoc(aveRef);
  }


    //!inventario

    addinventario(inventario: inventario) {
      const inventarioRef = collection(this.firestore, 'inventarios');
      return addDoc(inventarioRef, inventario);
    }
  
    getinventarios(): Observable<inventario[]> {
      const inventarioRef = collection(this.firestore, 'inventarios');
      return collectionData(inventarioRef, { idField: 'id' }) as Observable<inventario[]>;
    }
  
    async getinventario(id:string): Promise<any> {
      const aveRef = doc(this.firestore, "inventarios", id)
      return  await getDoc(aveRef);
    }
  
    async putinventario(id:string,ave:any): Promise<any> {
      const aveRef = doc(this.firestore, "inventarios", id)
      return  await updateDoc(aveRef,ave);
    }
  
    async deleteinventario(id: string) {
      const aveRef=doc(this.firestore, "inventarios", id)
      return  await deleteDoc(aveRef);
    }

  
  }



