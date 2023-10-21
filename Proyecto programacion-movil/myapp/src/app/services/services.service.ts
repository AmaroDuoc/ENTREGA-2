import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

interface usuario {
  username: string;
  password: string;
}


@Injectable({
  providedIn: 'root'
})

export class ServicesService {
  public autenticado!: boolean;
  private local!: Storage;

  constructor(private storage: Storage, private route: Router) {
    this.init()
   }
   async init(){
    const storage = await this.storage.create();
    this.local = storage
   }
   async register(username: string, password: string): Promise<Boolean> {
    const users = await this.local?.get('users') || [];
    const existe = users.find((us: usuario) => us.username === username && us.password === password);
    if (existe) {
      console.log("El usuario ya existe")
      return true;
    } else {
      const nuevo: usuario = { username, password };
      users.push(nuevo);
      await this.local.set('users', users);
      console.log("Registrado exitosamente")
      return false;
    }
  }
  async login(username: string, password: string): Promise<Boolean> {
    const users: usuario[] = (await this.local.get('users')) || [];
    const user = users.find((us:usuario)=> us.username === username && us.password === password);
    if (user) {
      this.autenticado = true ;
      return true;
    }
    this.autenticado = false;
    return false;
  }

  logout(){
    this.autenticado = false;
    this.route.navigate(['/home'])
  }
}
