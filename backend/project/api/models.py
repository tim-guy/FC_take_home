from django.db import models

# Create your models here.
class Question(models.Model):
   text = models.CharField(max_length=100)

class Answer(models.Model):
   question_text = models.CharField(max_length=100)
   answer_text = models.CharField(max_length=100)