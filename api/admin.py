from django.contrib import admin

# Register your models here.

from .models import Note

admin.site.register(Note)

class NoteAdmin(admin.ModelAdmin):
    list_display = ('title', 'body', 'created_at', 'published_at')
    list_filter = ('title', 'body', 'created_at', 'published_at')
    search_fields = ('title', 'body', 'created_at', 'published_at')
    list_per_page = 25
