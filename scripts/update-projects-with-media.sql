-- Update projects table with better dummy images and videos

-- Update ongoing construction projects with better media
UPDATE projects SET 
  image_url = 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop',
  gallery_urls = ARRAY[
    'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop'
  ]
WHERE title = 'Downtown Office Complex';

UPDATE projects SET 
  image_url = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
  gallery_urls = ARRAY[
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop'
  ]
WHERE title = 'Residential Villa Project';

UPDATE projects SET 
  image_url = 'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800&h=600&fit=crop',
  gallery_urls = ARRAY[
    'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop'
  ]
WHERE title = 'Shopping Mall Renovation';

-- Update ongoing interior projects with better media
UPDATE projects SET 
  image_url = 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
  gallery_urls = ARRAY[
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=600&fit=crop'
  ]
WHERE title = 'Corporate Headquarters Interior';

UPDATE projects SET 
  image_url = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
  gallery_urls = ARRAY[
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop'
  ]
WHERE title = 'Luxury Hotel Suites';

UPDATE projects SET 
  image_url = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
  gallery_urls = ARRAY[
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&h=600&fit=crop'
  ]
WHERE title = 'Restaurant Chain Interiors';

-- Update completed construction projects with better media
UPDATE projects SET 
  image_url = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
  gallery_urls = ARRAY[
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop'
  ]
WHERE title = 'Skyline Business Center';

UPDATE projects SET 
  image_url = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
  gallery_urls = ARRAY[
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop'
  ]
WHERE title = 'Green Valley Residences';

UPDATE projects SET 
  image_url = 'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800&h=600&fit=crop',
  gallery_urls = ARRAY[
    'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop'
  ]
WHERE title = 'Metro Shopping Complex';

-- Update completed interior projects with better media
UPDATE projects SET 
  image_url = 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
  gallery_urls = ARRAY[
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop'
  ]
WHERE title = 'Executive Office Suite';

UPDATE projects SET 
  image_url = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
  gallery_urls = ARRAY[
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop'
  ]
WHERE title = 'Boutique Hotel Interiors';

UPDATE projects SET 
  image_url = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
  gallery_urls = ARRAY[
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop'
  ]
WHERE title = 'Fine Dining Restaurant';

-- Add video URLs column if it doesn't exist
ALTER TABLE projects ADD COLUMN IF NOT EXISTS video_urls TEXT[];

-- Update projects with video URLs
UPDATE projects SET video_urls = ARRAY[
  'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
  'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4'
] WHERE category = 'construction';

UPDATE projects SET video_urls = ARRAY[
  'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4'
] WHERE category = 'interior';
