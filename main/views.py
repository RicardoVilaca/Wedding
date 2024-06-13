from django.shortcuts import render, HttpResponse
from .forms import RSVPForm

# Create your views here.
def home(request):
    success_message = None

    if request.method == 'POST':
        form = RSVPForm(request.POST)
        if form.is_valid():
            # Process the data in form.cleaned_data
            # You can save the data to a model or send an email, etc.
            print(request.POST)
            print(form.cleaned_data)  # For demonstration purposes
                        
            # Save the form data to the model
            form.save()
            
            # Set the success message
            success_message = "Obrigado pela resposta! Estamos ansiosos por celebrar convosco."

            form = RSVPForm()  # Reset the form after successful submission
    else:
        form = RSVPForm()

    return render(request, 'index.html', {'form': form, 'success_message': success_message})