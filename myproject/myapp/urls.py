from django.urls import path
from .views import ProductListView, ProductDetailView, UserDetailView, UserOrdersView, CreateOrderView, RegisterView, LoginView

urlpatterns = [
    path('products/', ProductListView.as_view(), name='product-list'),
    path('products/<int:pk>/', ProductDetailView.as_view(), name='product-detail'),
    path('user/', UserDetailView.as_view(), name='user-detail'),
    path('user/orders/', UserOrdersView.as_view(), name='user-orders'),
    path('order/', CreateOrderView.as_view(), name='create-order'),
    path('register/', RegisterView.as_view(), name='register'),
    # path('login/', LoginView.as_view(), name='login'),
]
