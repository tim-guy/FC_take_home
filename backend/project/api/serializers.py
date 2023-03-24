from rest_framework import serializers

from api.models import Question, Answer

class QuestionSerializer(serializers.ModelSerializer):
   class Meta:
       model = Question
       fields = ('text',)

class AnswerSerializer(serializers.ModelSerializer):
   class Meta:
       model = Answer
       fields = ('question_text','answer_text')
