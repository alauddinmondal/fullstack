from django.urls import path
from .views import PlanList, PlanListCreate, PlanListDelete


urlpatterns = [
    path('list/',PlanList.as_view()),
    path('create/',PlanListCreate.as_view()),
    path('delete/<int:id>',PlanListDelete.as_view()),
]