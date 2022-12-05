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
    const plantRef = doc(this.firestore, "plants", id)
    return  await getDoc(plantRef);
  }

  async putplant(id:string,plant:any): Promise<any> {
    const plantRef = doc(this.firestore, "plants", id)
    return  await updateDoc(plantRef,plant);
  }

  async deleteplant(id: string) {
    const plantRef=doc(this.firestore, "plants", id)
    return  await deleteDoc(plantRef);
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

  async uploadimagenAbout(file:File,id:String): Promise<string>{
    const imgRef = ref(this.storage, `images/${String}`);


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
    const insectoRef = doc(this.firestore, "insectos", id)
    return  await getDoc(insectoRef);
  }

  async putinsecto(id:string,insecto:any): Promise<any> {
    const insectoRef = doc(this.firestore, "insectos", id)
    return  await updateDoc(insectoRef,insecto);
  }

  async deleteinsecto(id: string) {
    const insectoRef=doc(this.firestore, "insectos", id)
    return  await deleteDoc(insectoRef);
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
      const inventarioRef = doc(this.firestore, "inventarios", id)
      return  await getDoc(inventarioRef);
    }
  
    async putinventario(id:string,inventario:any): Promise<any> {
      const inventarioRef = doc(this.firestore, "inventarios", id)
      return  await updateDoc(inventarioRef,inventario);
    }
  
    async deleteinventario(id: string) {
      const inventarioRef=doc(this.firestore, "inventarios", id)
      return  await deleteDoc(inventarioRef);
    }



    //about us

    async getabout(): Promise<any> {
      const aboutRef = doc(this.firestore, "about", "1")
      return  await getDoc(aboutRef);
    }

    async putabout(about:any): Promise<any> {
      const aboutRef = doc(this.firestore, "about", "1")
      return  await updateDoc(aboutRef,about);
    }
  
  }



