from rest_framework import serializers
from .models import Product, User, Order

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'name', 'email']

class OrderSerializer(serializers.ModelSerializer):
    products = ProductSerializer(many=True)
    user = UserSerializer()

    class Meta:
        model = Order
        fields = '__all__'

class CreateOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['products', 'user']
