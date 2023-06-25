from rest_framework import generics
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.shortcuts import get_object_or_404

from .models import Diary
from .serializers import DiarySerializer

# generic view is a view that abstracts common patterns when working with views and models.
class DiaryDetailApiView(generics.RetrieveAPIView):
    queryset = Diary.objects.all()
    serializer_class = DiarySerializer

class DiaryListCreateApiView(generics.ListCreateAPIView):
    queryset = Diary.objects.all()
    serializer_class = DiarySerializer

    def perform_create(self, serializer):
        title = serializer.validated_data.get('title')
        content = serializer.validated_data.get('content') or None
        if content == None:
            content = title
        serializer.save(content=content)
        print(serializer.validated_data)

class DiaryListApiView(generics.ListAPIView):
    queryset = Diary.objects.all()
    serializer_class = DiarySerializer

class DiaryUpdateApiView(generics.UpdateAPIView):
    queryset = Diary.objects.all()
    serializer_class = DiarySerializer
    lookup_field = 'pk'

class DiaryDeleteApiView(generics.DestroyAPIView):
    queryset = Diary.objects.all()
    serializer_class = DiarySerializer
    lookup_field = 'pk'


@api_view(['GET','POST'])
def diary_create_view(request, pk=None, *args, **kwargs):
    method = request.method
    if method == 'GET':
        if pk is not None:
            # output one object

            
            # qs = Diary.objects.filter(id=pk)
            # if not qs.exists():
            #     return Response({'message': 'diary not found.'}, status=404)
            # obj = qs.first()

            # This is the same as the above 4 lines
            obj = get_object_or_404(Diary, id=pk)
            serializer = DiarySerializer(obj)
            return Response(serializer.data, status=200)
        # output all objects
        qs = Diary.objects.all()
      
        serializer = DiarySerializer(qs, many=True)

        
        return Response(serializer.data, status=200)

    if method == 'POST':
        serializer = DiarySerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            title = serializer.validated_data.get('title')
            content = serializer.validated_data.get('content') or None
            if content == None:
                content = title

            serializer.save( 
                content=content
            )
            print('this is serializer.validated_data')
            return Response(serializer.data, status=201)
        return Response({}, status=400)