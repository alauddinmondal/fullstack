from rest_framework.generics import ListAPIView, CreateAPIView, DestroyAPIView
from .serializers import PlanSerializer
from .models import Plan

# Create your views here.


class PlanList(ListAPIView):
    queryset = Plan.objects.all()
    serializer_class = PlanSerializer


class PlanListCreate(CreateAPIView):
    queryset = Plan.objects.all()
    serializer_class = PlanSerializer



class PlanListDelete(DestroyAPIView):
    queryset = Plan.objects.all()
    serializer_class = PlanSerializer
    lookup_field = 'id'