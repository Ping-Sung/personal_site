from rest_framework import serializers
from .models import Diary

class DiarySerializer(serializers.ModelSerializer):
    combination = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Diary
        fields = ['id',
                  'title',
                  'content',
                  'date', 
                  'combination'
        ]

    def get_combination(self, obj):
        try:
            return obj.title + ": " + obj.content
        except:
            return None