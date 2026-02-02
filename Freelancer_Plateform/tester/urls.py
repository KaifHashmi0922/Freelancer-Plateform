
from django.contrib import admin
from django.urls import path
from tester import views



urlpatterns = [
    
    path('',views.index,name='index'),
    path('dashboard/',views.dashboard,name='dashboard'),
    path('find_talent/',views.find_talent,name='find_talent'),
    path('dashboard',views.dashboard,name='dashboard'),
    path('find_work/',views.find_work,name='find_work'),
    path('forget/',views.forget,name='forget'),
    path('job_detail/',views.job_detail,name='job_detail'),
    path('login/',views.login_form,name='login'),
    path('message/',views.message,name='message'),
    path('notification/',views.notification,name='notification'),
    path('post_job/',views.post_job,name='post_job'),
    path('profile/',views.profile,name='profile'),
    path('proposales/',views.proposales,name='proposales'),
    path('register/',views.register,name='register'),
    path('hire_talent/',views.hire_talent,name='hire_talent'),
    path('forget_password/',views.forget_password,name='forget_password'),
    
    
    
]
