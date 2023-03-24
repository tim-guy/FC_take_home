from django.urls import include, path
from rest_framework import routers
from api.views import QuestionViewSet, AnswerViewSet

router = routers.DefaultRouter()
router.register(r'question', QuestionViewSet)
router.register(r'answer', AnswerViewSet)

urlpatterns = [
   path('', include(router.urls)),
]