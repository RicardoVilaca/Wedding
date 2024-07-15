from django.shortcuts import render, HttpResponse
from .forms import RSVPForm
from django.http import JsonResponse

# Create your views here.
def home(request):
    return render(request, 'index.html')

def submit_rsvp(request):
    if request.method == 'POST':
        form = RSVPForm(request.POST)
        if form.is_valid():
            # Process the data in form.cleaned_data
            # You can save the data to a model or send an email, etc.
            print(request.POST)
                        
            # Save the form data to the model
            i = form.save(commit=False)

            # Concat kids ages and save
            i.kids_ages = form.cleaned_data['kids_ages']
            i.save()
            
            # Set the success message
            success_message = "Obrigado pela resposta! Estamos ansiosos por celebrar convosco."

            return JsonResponse({'message': success_message}, status=200)
        else:
            errors = form.errors.as_json()
            return JsonResponse({'errors': errors}, status=400)
    return JsonResponse({'message': 'Método não permitido.'}, status=405)
