import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <header class="logo-container">
        <h1>DANIKROSSY</h1>
        <button class="profile-btn" (click)="redirectToLogin()">Профиль</button>
      </header>
      <main>
        <div class="main-container">
          <section class="promo">
            <h2>Магазин <span class="highlight">хайповых</span> кроссовок</h2>
            <p>
              Оригинальные кроссовки не из Китая ж**у ставлю. Закажи правую пару
              и получи левую пару бесплатно
            </p>
            <button class="catalog-btn" (click)="redirectToProducts()">
              Перейти в каталог
            </button>
          </section>
          <section class="sneakers">
            <img src="assets/images/sneakers.png" alt="Sneakers" />
          </section>
        </div>
      </main>
      <section class="features">
        <div class="feature">
          <span class="icon">👍</span>
          <p>Лучшее качество</p>
        </div>
        <div class="feature">
          <span class="icon">⏰</span>
          <p>Быстрая доставка</p>
        </div>
        <div class="feature">
          <span class="icon">💵</span>
          <p>Низкие цены</p>
        </div>
      </section>
    </div>
  `,
  styles: [
    `
      .logo-container {
        color: #fff8f8;
        font-family: 'Luckiest Guy';
        font-size: 40px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
      }
      .main-container {
        display: flex;
        // flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 60vh;
      }
      .container {
        color: white;
        // background-color: #ff6600;
        padding: 20px;
        // border-radius: 10px;
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background: linear-gradient(180deg, #fa5a00 0%, #530000 100%);
        overflow: hidden;
      }

      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .profile-btn {
        background-color: #ff9900;
        border: none;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
      }

      .promo {
        // text-align: center;
        font-family: Montserrat;
        color: #fdf4f4;
        font-family: Montserrat;
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 60%;
      }
      .promo h2 {
        color: #fdf4f4;
        font-family: Montserrat;
        font-size: 48px;
        font-style: normal;
        font-weight: 900;
        line-height: normal;
      }

      .highlight {
        color: #00ff00;
      }

      .catalog-btn {
        border: none;
        padding: 18px 48px;
        cursor: pointer;

        border-radius: 10px;
        background: #097400;
        box-shadow: 0px 0px 15px 5px rgba(246, 235, 235, 0.25);

        width: 342px;
        height: 64px;
        flex-shrink: 0;
      }

      .features {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 20px;

        color: #fdf4f4;
        font-family: Montserrat;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }

      .feature {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .icon {
        font-size: 24px;
      }

      .sneakers {
        display: flex;
        justify-content: space-around;
        // margin-top: 20px;
        width: 40vw;
        flex-direction: column;
        // gap: -20px;
        position: relative;
        // height: 300px;
      }

      // .sneakers img {
      //   // width: 150px;
      //   // background: url(<path-to-image>) lightgray 50% / cover no-repeat;
      //   box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25),
      //     0px 4px 50px 0px rgba(54, 54, 54, 0.54) inset;
      // }
    `,
  ],
})
export class HomePageComponent {
  redirectToLogin() {
    this.router.navigate(['/auth']);
  }
  router = inject(Router);
  redirectToProducts() {
    this.router.navigate(['/products']);
    // Add your redirect logic here
  }
}
