from django.shortcuts import render
from rest_framework import viewsets

from api.serializers import QuestionSerializer, AnswerSerializer
from api.models import Question, Answer

class QuestionViewSet(viewsets.ModelViewSet):
   queryset = Question.objects.all()
   serializer_class = QuestionSerializer

class AnswerViewSet(viewsets.ModelViewSet):
   queryset = Answer.objects.all()
   serializer_class = AnswerSerializer