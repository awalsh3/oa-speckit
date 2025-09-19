# Data Model: Hashtag Activism App

## Entities

### Hashtag
- **id**: Unique identifier
- **text**: The hashtag string (e.g., #BlackLivesMatter)
- **description**: Short description of the social issue
- **resources**: List of associated Resource IDs
- **trend_score**: Numeric indicator of current trend level

### Resource
- **id**: Unique identifier
- **hashtag_id**: Associated Hashtag ID
- **type**: Type of resource (petition, donation, education)
- **title**: Resource title
- **url**: Link to resource
- **description**: Short description
- **status**: active | broken

### User
- **id**: Unique identifier
- **email**: User email
- **password_hash**: Hashed password (if using local auth)
- **created_at**: Account creation timestamp

### UserAction
- **id**: Unique identifier
- **user_id**: User who completed the action
- **resource_id**: Resource acted upon
- **completed_at**: Timestamp of completion

## Relationships
- A Hashtag has many Resources
- A Resource belongs to a Hashtag
- A User can complete many UserActions
- A UserAction links a User to a Resource

## Validation Rules
- Hashtag text must be unique
- Resource URL must be valid
- User email must be unique and valid
- UserAction must reference existing User and Resource
