import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <header>
        <h1>TIMUROSSY</h1>
        <button class="profile-btn">Профиль</button>
      </header>
      <main>
        <div class="main-container">
          <section class="promo">
            <h2>Магазин <span class="highlight">хайповых</span> кроссовок</h2>
            <p>
              Оригинальные кроссовки не из Китая жопу ставлю. Закажи правую пару
              и получи левую пару бесплатно
            </p>
            <button class="catalog-btn">Перейти в каталог</button>
          </section>
          <section class="sneakers">
            <img src="assets/images/sneaker.png" alt="Sneaker 1" />
            <img src="assets/images/sneaker2.png" alt="Sneaker 2" />
          </section>
        </div>

        <section class="features">
          <div class="feature">
            <span class="icon">👍</span>
            <p>Ебейшее качество</p>
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
      </main>
    </div>
  `,
  styles: [
    `
      .main-container {
        display: flex;
        // flex-direction: column;
        align-items: center;
        justify-content: space-between;
      }
      .container {
        font-family: Arial, sans-serif;
        color: white;
        background-color: #ff6600;
        padding: 20px;
        // border-radius: 10px;
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
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
        text-align: center;
      }

      .highlight {
        color: #00ff00;
      }

      .catalog-btn {
        background-color: #00cc00;
        border: none;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
      }

      .features {
        display: flex;
        justify-content: space-around;
        margin-top: 20px;
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
        height: 300px;
      }

      .sneakers img {
        // width: 150px;
        // background: url(<path-to-image>) lightgray 50% / cover no-repeat;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25),
          0px 4px 50px 0px rgba(54, 54, 54, 0.54) inset;
      }
    `,
  ],
})
export class HomePageComponent {}
