from django.urls import path

from . import views


urlpatterns = [
    path('create/', views.DiaryListCreateApiView.as_view()),
    path('<int:pk>/', views.DiaryDetailApiView.as_view()),
    path('update/<int:pk>/', views.DiaryUpdateApiView.as_view()),
    path('delete/<int:pk>/', views.DiaryDeleteApiView.as_view()),
    path('', views.DiaryListApiView.as_view()),
    path('function_create/', views.diary_create_view),
    path('function_create/<int:pk>/', views.diary_create_view),

]