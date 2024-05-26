import os
import django
import random

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'myproject.settings')
django.setup()

from myapp.models import Product, User, Order

def populate():
    # Создание пользователей
    user = User.objects.create_user(name='John Doe', email='john@example.com', password='password')

    # Создание продуктов
    product1 = Product.objects.create(
        name='Nike Air Max',
        description='Comfortable and stylish',
        price=120.00,
        images=["image1.jpg", "image2.jpg"],
        sizes=[38, 39, 40, 41, 42]
    )

    product2 = Product.objects.create(
        name='Adidas Ultraboost',
        description='High performance running shoes',
        price=150.00,
        images=["image3.jpg", "image4.jpg"],
        sizes=[40, 41, 42, 43, 44]
    )

    # Создание заказа
    order = Order.objects.create(user=user)
    order.products.set([product1, product2])
    order.save()

if __name__ == '__main__':
    populate()
