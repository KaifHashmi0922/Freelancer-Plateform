from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    return render(request,"tester/index.html")


def dashboard(request):
    return render(request,"tester/dashboard.html")


def browes_job(request):
    return render(request,"tester/browes_job.html")


def find_talent(request):
    return render(request,"tester/find_talent.html")


def find_work(request):
    return render(request,"tester/find_work.html")

def forget(request):
    return render(request,"tester/forget.html")

def job_detail(request):
    return render(request,"tester/job_detail.html")

def login_form(request):
    return render(request,"tester/login_form.html")

def message(request):
    return render(request,"tester/fmessage.html")

def notification(request):
    return render(request,"tester/notification.html")

def post_job(request):
    return render(request,"tester/post_job.html")

def profile(request):
    return render(request,"tester/profile.html")

def proposales(request):
    return render(request,"tester/proposales.html")

def register(request):
    return render(request,"tester/register.html")

def message(request):
    return render(request,"tester/message.html")

def hire_talent(request):
    return render(request,"tester/hire_talent.html")


def forget_password(request):
    return HttpResponse("That Forget password Page of Login page ")
